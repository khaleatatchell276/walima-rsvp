document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const name = nameInput.value.trim();

  if (!name) {
    alert('Please enter your full name.');
    return;
  }

  let guests = JSON.parse(localStorage.getItem('guests') || '[]');

  if (guests.length >= 100) {
    alert('Sorry, the guest list is full.');
    return;
  }

  if (guests.includes(name)) {
    alert('You have already RSVPed.');
    return;
  }

  guests.push(name);
  localStorage.setItem('guests', JSON.stringify(guests));

  const phoneNumbers = ['+27815217435', '+27788565713'];
  const message = encodeURIComponent(`RSVP Alert: ${name} has RSVPed to the Walima.`);

  phoneNumbers.forEach(number => {
    const url = `https://wa.me/${number.replace(/\D/g, '')}?text=${message}`;
    window.open(url, '_blank');
  });

  const responseMsg = document.getElementById('responseMsg');
  responseMsg.textContent = 'Thank you for your RSVP!';
  nameInput.value = '';
});
