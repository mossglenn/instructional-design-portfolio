export async function loadAllProjects() {
  const modules = import.meta.glob('./*.ts');
  const imports = await Promise.all(Object.values(modules).map((mod) => mod()));
  return imports.map((mod) => mod.default);
}
