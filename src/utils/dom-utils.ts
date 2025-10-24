const normalizeId = (idOrHash: string) => {
  return idOrHash.replace(/^#/, '');
};

const replaceHash = (id: string) => {
  if (typeof window == 'undefined') return;
  const { pathname, search, hash } = window.location;
  const target = `#${id}`;
  if (hash !== target) history.replaceState(null, '', `${pathname}${search}${target}`);
};

export const getCurrentLocationId = () => {
  return typeof window !== 'undefined' ? normalizeId(window.location.hash) : '';
};

export const scrollToId = (idOrHash: string, updateHash = true, offsetPx = -32) => {
  const id = normalizeId(idOrHash);
  if (!id || typeof document === 'undefined') return;
  const el = document.getElementById(id);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const targetY = rect.top + scrollTop - offsetPx;

  window.scrollTo({
    top: targetY,
    behavior: 'smooth',
  });

  if (updateHash) replaceHash(id);
};

export const scrollToCurrentLocationId = () => {
  const id = getCurrentLocationId();
  if (id) scrollToId(id, false);
};

export const initializeLocationId = (defaultId: string) => {
  if (typeof window === 'undefined') return;
  const { pathname, hash, search } = window.location;
  const isRoot = pathname === '/' || pathname === '';
  if (isRoot && !hash)
    history.replaceState(null, '', `${pathname || '/'}${search}#${normalizeId(defaultId)}`);
};

export const syncActiveLocationId = (activeId: string | null) => {
  if (!activeId) return;
  replaceHash(normalizeId(activeId));
};
