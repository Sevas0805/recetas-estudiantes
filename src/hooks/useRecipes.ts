import { useContext, useState} from 'react';
import { RecipeContext } from '../context/RecipeContext';
import type { Recipe } from '../types/Recipe';

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes debe ser usado dentro de un RecipeProvider');
  }
  
  const [difficultyFilter, setDifficultyFilter] = useState<Recipe['dificultad'] | ''>('');

  // Filtrado de recetas por dificultad
  const filterByDifficulty = (difficulty: Recipe['dificultad']) => {
    setDifficultyFilter(difficulty);
    return context.recetas.filter(receta => receta.dificultad === difficulty);
  };

  return {
    ...context,
    difficultyFilter,
    setDifficultyFilter,
    filterByDifficulty,
  };
};