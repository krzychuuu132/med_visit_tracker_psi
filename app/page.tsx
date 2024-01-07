import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
const prisma = new PrismaClient();

export default async function Home() {
  // // Example Data for Access model
  // const accessData = {
  //   login: "example_login",
  //   password: "example_password",
  // };

  // // Create an example Access record
  // const createdAccess = await prisma.access.create({
  //   data: accessData,
  // });
  // console.log("Created Access:", createdAccess);

  // // Example Data for Doctors model
  // const doctorData = {
  //   firstName: "John",
  //   lastName: "Doe",
  //   specialization: "General",
  //   phone_number: BigInt(1234567890),
  // };

  // // Create an example Doctor record
  // const createdDoctor = await prisma.doctors.create({
  //   data: doctorData,
  // });
  // console.log("Created Doctor:", createdDoctor);

  // // Example Data for Registration_stuff model
  // const registrationStuffData = {
  //   firstName: "Alice",
  //   lastName: "Smith",
  //   phone_number: BigInt(9876543210),
  // };

  // // Create an example Registration_stuff record
  // const createdRegistrationStuff = await prisma.registration_stuff.create({
  //   data: registrationStuffData,
  // });
  // console.log("Created Registration Stuff:", createdRegistrationStuff);

  // // Example Data for Patients model
  // const patientData = {
  //   firstName: "Bob",
  //   lastName: "Johnson",
  //   pesel: BigInt(123456789012),
  //   email: "bob@example.com",
  //   phone_number: BigInt(5551234567),
  //   address: "123 Main Street, City",
  // };

  // // Create an example Patient record
  // const createdPatient = await prisma.patients.create({
  //   data: patientData,
  // });
  // console.log("Created Patient:", createdPatient);

  // // Example Data for Services model
  // const serviceData = {
  //   type: "Consultation",
  //   doctor_id: createdDoctor.id, // Use the ID of the previously created doctor
  //   price: 50.0,
  //   duration: new Date("2022-12-31T12:00:00Z"),
  // };

  // // Create an example Service record
  // const createdService = await prisma.services.create({
  //   data: serviceData,
  // });
  // console.log("Created Service:", createdService);

  // // Example Data for Appointments model
  // const appointmentData = {
  //   patient_pesel: createdPatient.pesel,
  //   patient_id: createdPatient.id,
  //   doctor_id: createdDoctor.id,
  //   service_id: createdService.id,
  //   date: new Date("2023-01-15"),
  //   financing: "NFZ" as FinancingEnum,
  // };

  // // Create an example Appointment record
  // const createdAppointment = await prisma.appointments.create({
  //   data: appointmentData,
  // });
  // console.log("Created Appointment:", createdAppointment);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-6">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1></h1>
        <div className="bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "Araboto", fontSize: "20px" }}
          >
            Zaloguj się <Image src="/user.png" alt="User Logo" className="relative" width={30} height={30} priority />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center">
        <Image className="relative " src="/asclepios_logo.png" alt="Asclepios Logo" width={380} height={37} priority />
      </div>

      <div>
        <Link
          href="/registration"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Rejestracja <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Zarejstruj się na wizytę</p>
        </Link>
        <Link
          href="/available-schedules"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Wolne terminy <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Lista wolnych terminów oraz dostępnych lekarzy</p>
        </Link>
        <Link
          href="/appointment-history"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Historia wizyt <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Historia wizyt pacjenta</p>
        </Link>
        <Link
          href="/booked-schedules"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Przychodnie <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Wybierz swoją przychodnię.</p>
        </Link>
        <Link
          href="/medical-services"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Przychodnie <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Wybierz swoją przychodnię.</p>
        </Link>

        <Link href="/patients" rel="noopener noreferrer">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Kontakt <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Skontaktuj się z nami, jeśli potrzebujesz pomocy.</p>
        </Link>
      </div>
    </main>
  );
}
