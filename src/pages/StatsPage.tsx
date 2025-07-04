import React from 'react';
import { useRecipes } from '../hooks/useRecipes';

const StatsPage: React.FC = () => {
  const { recetas } = useRecipes();

  // Total de recetas
  const totalRecetas = recetas.length;

  // Recetas por categoría
  const recetasPorCategoria: Record<string, number> = {};
  recetas.forEach(receta => {
    recetasPorCategoria[receta.categoria] = (recetasPorCategoria[receta.categoria] || 0) + 1;
  });

  // Receta más popular (mayor valoración)
  const recetaPopular = recetas.reduce((max, receta) =>
    receta.valoracion > max.valoracion ? receta : max, recetas[0]
  );

  return (
    <div className="stats-page">
      <div className="page-header">
        <h1 className="page-title">📊 Estadísticas de Recetas</h1>
        <p className="page-subtitle">
          Información resumida sobre las recetas de la comunidad
        </p>
      </div>

      <div className="stats-section">
        <h2 className="section-title">Total de Recetas</h2>
        <p className="stat-number">{totalRecetas}</p>
      </div>

      <div className="stats-section">
        <h2 className="section-title">Recetas por Categoría</h2>
        <ul>
          {Object.entries(recetasPorCategoria).map(([categoria, cantidad]) => (
            <li key={categoria}>
              <strong>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}:</strong> {cantidad}
            </li>
          ))}
        </ul>
      </div>

      <div className="stats-section">
        <h2 className="section-title">Receta Más Popular</h2>
        {recetaPopular ? (
          <div>
            <strong>{recetaPopular.nombre}</strong> <br />
            Valoración: <span className="rating-stars">{'⭐'.repeat(Math.round(recetaPopular.valoracion))}</span> {recetaPopular.valoracion}/5 <br />
            Categoría: <span className="category-tag">{recetaPopular.categoria}</span>
          </div>
        ) : (
          <p>No hay recetas registradas.</p>
        )}
      </div>
    </div>
  );
};

export default StatsPage;