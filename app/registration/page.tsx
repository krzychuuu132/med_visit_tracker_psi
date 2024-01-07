import { createAppointment } from "@/actions/actions";
import { AppointmentFormDataI } from "@/actions/actions.types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Registration() {
  const appointments = await prisma.appointments.findMany({
    include: {
      doctors: true,
      services: true,
      patients: true,
    },
  });
  const patients = await prisma.patients.findMany();
  const doctors = await prisma.doctors.findMany();
  const services = await prisma.services.findMany();

  const handleSubmit = async (formData: FormData) => {
    "use server";
    try {
      const appointmentData = Object.fromEntries(formData.entries()) as unknown as AppointmentFormDataI;
      await createAppointment(appointmentData);
    } catch (e: unknown) {
      console.error(e);
    }
  };

  return (
    <main>
      <h1>Registration Page</h1>

      {/* Display List of Appointments */}
      <ul style={{ marginBottom: 100 }}>
        {appointments?.map((appointment) => (
          <li key={appointment.id}>
            Date: {String(appointment.date)}, Time: {String(appointment.time)}, Financing: {appointment.financing}
            <br />
            Doctor: {appointment.doctors.firstName} {appointment.doctors.lastName}
            <br />
            Patient: {appointment.patients.firstName} {appointment.patients.lastName} (PESEL: {String(appointment.patients.pesel)})
            <br />
            Service: {appointment.services.type}, Price: {appointment.services.price}
          </li>
        ))}
      </ul>

      {/* Form to Create a New Appointment */}
      <h2>Create New Appointment</h2>
      <form action={handleSubmit}>
        <div>
          <label htmlFor="patientPesel">Patient PESEL:</label>
          <input type="text" id="patientPesel" name="patientPesel" />
        </div>
        <div>
          <label htmlFor="patientId">Select Patient:</label>
          <select id="patientId" name="patientId">
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.firstName} {patient.lastName} (PESEL: {String(patient.pesel)})
              </option>
            ))}
          </select>
        </div>

        {/* Add similar controls for doctorId and serviceId, fetching data from the server */}
        <div>
          <label htmlFor="doctorId">Select Doctor:</label>
          <select id="doctorId" name="doctorId">
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.firstName} {doctor.lastName} ({doctor.specialization})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="serviceId">Select Service:</label>
          <select id="serviceId" name="serviceId">
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.type} - {service.price} PLN
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create Appointment</button>
      </form>
    </main>
  );
}
