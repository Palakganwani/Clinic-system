const form = document.getElementById("appointmentForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const doctor = document.getElementById("doctor").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  confirmation.classList.remove("hidden");
  confirmation.innerHTML = `
    ✅ <strong>Appointment Confirmed!</strong><br><br>
    <b>Name:</b> ${name}<br>
    <b>Doctor:</b> ${doctor}<br>
    <b>Date:</b> ${date}<br>
    <b>Time:</b> ${time}
  `;

  form.reset();
});
