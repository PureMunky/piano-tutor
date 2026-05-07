type RouteHandler = (container: HTMLElement, params: Record<string, string>) => void;
type CleanupFn = () => void;

interface Route {
  pattern: RegExp;
  paramNames: string[];
  handler: RouteHandler;
}

const routes: Route[] = [];
let appContainer: HTMLElement;
const cleanupCallbacks: Set<CleanupFn> = new Set();

export function registerRoute(
  path: string,
  handler: RouteHandler
): void {
  const paramNames: string[] = [];
  const regexStr = path.replace(/:(\w+)/g, (_, name) => {
    paramNames.push(name);
    return '([^/]+)';
  });
  routes.push({
    pattern: new RegExp(`^${regexStr}$`),
    paramNames,
    handler,
  });
}

// Register a callback that runs before every route change
export function onBeforeNavigate(fn: CleanupFn): void {
  cleanupCallbacks.add(fn);
}

export function navigate(path: string): void {
  location.hash = `#${path}`;
}

function runCleanups(): void {
  cleanupCallbacks.forEach(fn => fn());
}

function resolveRoute(): void {
  // Run all registered cleanups before switching routes
  runCleanups();

  const hash = location.hash.slice(1) || '/';
  const mainContent = appContainer.querySelector('.main-content') as HTMLElement;
  if (!mainContent) return;

  for (const route of routes) {
    const match = hash.match(route.pattern);
    if (match) {
      const params: Record<string, string> = {};
      route.paramNames.forEach((name, i) => {
        params[name] = match[i + 1];
      });
      mainContent.innerHTML = '';
      route.handler(mainContent, params);
      window.scrollTo(0, 0);
      return;
    }
  }

  mainContent.innerHTML = '<p>Page not found. <a href="#/">Go home</a></p>';
}

export function initRouter(container: HTMLElement): void {
  appContainer = container;

  container.innerHTML = `
    <header class="app-header">
      <h1><a href="#/">Piano Learn</a></h1>
      <div class="header-actions">
        <a href="#/settings" class="btn" style="font-size: 0.8rem;">Settings</a>
      </div>
    </header>
    <main class="main-content"></main>
  `;

  window.addEventListener('hashchange', resolveRoute);
  resolveRoute();
}
