import { NoteI } from "../types";

interface CategoryCount {
  category: string;
  active: number;
  archived: number;
}

export function separateAndCountByCategory(data: NoteI[]): CategoryCount[] {
  const categoryCounts: CategoryCount[] = data.reduce((acc: CategoryCount[], item: NoteI) => {
    const { category, isArchived } = item;
    const existingCategory = acc.find((c) => c.category === category);

    if (existingCategory) {
      if (isArchived) {
        existingCategory.archived++;
      } else {
        existingCategory.active++;
      }
    } else {
      const newCategory: CategoryCount = {
        category,
        active: isArchived ? 0 : 1,
        archived: isArchived ? 1 : 0,
      };
      acc.push(newCategory);
    }

    return acc;
  }, []);

  return categoryCounts;
}
