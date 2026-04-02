/* ============================================================
   CONTACT-FORM.JS — Validazione + submit Web3Forms + EmailJS autoresposta
   ============================================================ */

const EMAILJS_SERVICE_ID  = 'service_27e5tzh'
const EMAILJS_TEMPLATE_ID = 'template_ebhfr1i'
const EMAILJS_PUBLIC_KEY  = 'heCC5J5HIs4uNrnN0'

async function sendAutoReply(name, email) {
  await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id:      EMAILJS_SERVICE_ID,
      template_id:     EMAILJS_TEMPLATE_ID,
      user_id:         EMAILJS_PUBLIC_KEY,
      template_params: { name, email },
    }),
  })
}

export function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const statusEl = form.querySelector('.contact-form__status');

  const showStatus = (type, message) => {
    if (!statusEl) return;
    statusEl.className = `contact-form__status contact-form__status--${type}`;
    statusEl.textContent = message;
  };

  const clearErrors = () => {
    form.querySelectorAll('.error').forEach((el) => el.classList.remove('error'));
  };

  const validate = () => {
    clearErrors();
    let valid = true;

    const name  = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const msg   = form.querySelector('[name="message"]');

    if (name && !name.value.trim()) {
      name.classList.add('error');
      valid = false;
    }
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        email.classList.add('error');
        valid = false;
      }
    }
    if (msg && !msg.value.trim()) {
      msg.classList.add('error');
      valid = false;
    }

    return valid;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validate()) {
      showStatus('error', 'Compila tutti i campi obbligatori correttamente.');
      return;
    }

    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Invio in corso...';
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      const data = await response.json()
      if (response.ok && data.success) {
        // Invia autoresposta via EmailJS
        const senderName  = form.querySelector('[name="name"]')?.value  || ''
        const senderEmail = form.querySelector('[name="email"]')?.value || ''
        sendAutoReply(senderName, senderEmail).catch(() => {})
        showStatus('success', '✓ Messaggio inviato! Riceverai una conferma via email.');
        form.reset();
        clearErrors();
      } else {
        throw new Error('Server error');
      }
    } catch {
      showStatus('error', 'Qualcosa è andato storto. Riprova o scrivimi direttamente via email.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Invia messaggio';
      }
    }
  });
}
