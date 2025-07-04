const FAVORITES_KEY = 'recetas_favoritas';

// Obtener favoritos del localStorage
export function getFavorites(): number[] {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
}

// Agregar un favorito
export function addFavorite(id: number): void {
  const favorites = getFavorites();
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

// Remover un favorito
export function removeFavorite(id: number): void {
  const favorites = getFavorites().filter(favId => favId !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}