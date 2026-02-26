import { skillsCategories } from '@/data/skills';

describe('skills data', () => {
  it('exports an array of categories', () => {
    expect(Array.isArray(skillsCategories)).toBe(true);
    expect(skillsCategories.length).toBeGreaterThan(0);
  });

  it('each category has id, category, and subcategories', () => {
    skillsCategories.forEach((cat) => {
      expect(cat).toHaveProperty('id');
      expect(cat).toHaveProperty('category');
      expect(cat).toHaveProperty('subcategories');
      expect(Array.isArray(cat.subcategories)).toBe(true);
    });
  });

  it('subcategories have title and items array', () => {
    skillsCategories.forEach((cat) => {
      cat.subcategories.forEach((sub) => {
        expect(sub).toHaveProperty('title');
        expect(sub).toHaveProperty('items');
        expect(Array.isArray(sub.items)).toBe(true);
        sub.items.forEach((item) => {
          expect(item).toHaveProperty('id');
          expect(item).toHaveProperty('name');
        });
      });
    });
  });
});
