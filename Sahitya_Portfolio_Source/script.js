for (const trigger of document.querySelectorAll('[data-certificate]')) {
    trigger.addEventListener('click', () => {
      document.getElementById(trigger.dataset.certificate).showModal();
    });
  }
  for (const dialog of document.querySelectorAll('.certificate-dialog')) {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  }
