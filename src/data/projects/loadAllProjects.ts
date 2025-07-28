export async function loadAllProjects() {
  const modules = import.meta.glob('./*.ts');
  const imports = await Promise.all(Object.values(modules).map((mod) => mod()));
  const projects = imports.map((mod) => mod.default);

  projects.sort((a, b) => {
    const aKey = a.order ?? a.id;
    const bKey = b.order ?? b.id;
    return aKey.localeCompare(bKey);
  });

  return projects;
}
