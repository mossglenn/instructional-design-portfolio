export function setupProjectCardToggles() {
  document
    .querySelectorAll('[id^="project-card-toggle-"]')
    .forEach((button) => {
      const id = button.id.replace('project-card-toggle-', '');
      const card = document.getElementById(`project-card-${id}`);

      function toggleCard() {
        if (!card) return;
        const expanded = card.classList.toggle('expanded');
        button.textContent = expanded ? 'Hide details' : 'More details';
        if (expanded) {
          card.setAttribute('data-manual-toggle', 'true');
        } else {
          card.removeAttribute('data-manual-toggle');
        }
      }

      button.addEventListener('click', toggleCard);

      button.addEventListener('mouseenter', () => {
        if (!card) return;
        card.classList.add('expanded');
        button.textContent = 'Hide details';
      });

      button.addEventListener('mouseleave', () => {
        if (!card) return;
        // Only remove if it wasn't manually toggled via click
        if (!card.hasAttribute('data-manual-toggle')) {
          setTimeout(() => {
            // Check again to ensure manual toggle wasn't set during delay
            if (!card.hasAttribute('data-manual-toggle')) {
              card.classList.remove('expanded');
              button.textContent = 'More details';
            }
          }, 250); // Delay in milliseconds
        }
      });
    });
}
document.addEventListener('DOMContentLoaded', setupProjectCardToggles);
