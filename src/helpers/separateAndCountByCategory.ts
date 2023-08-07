import { NoteI } from "../types";

interface CategoryCount {
  category: string;
  active: number;
  archived: number;
}

export function separateAndCountByCategory(data: NoteI[]): CategoryCount[] {
  const categoryCounts: CategoryCount[] = data.reduce((acc: CategoryCount[], item: NoteI) => {
    const { category, is_archived } = item;
    const existingCategory = acc.find((c) => c.category === category);

    if (existingCategory) {
      if (is_archived) {
        existingCategory.archived++;
      } else {
        existingCategory.active++;
      }
    } else {
      const newCategory: CategoryCount = {
        category,
        active: is_archived ? 0 : 1,
        archived: is_archived ? 1 : 0,
      };
      acc.push(newCategory);
    }

    return acc;
  }, []);

  return categoryCounts;
}
