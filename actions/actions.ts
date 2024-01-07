"use server";

import { FinancingEnum } from "@/types/enums";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { AppointmentFormDataI } from "./actions.types";



const prisma = new PrismaClient();

export async function getAppointments() {
  const appointments = await prisma.appointments.findMany({
    include: {
      doctors: true,
      services: true, 
      patients: true, 
    },
  });
  return appointments;
}

export async function createAppointment(formData: AppointmentFormDataI) {
    const { doctorId, patientPesel, serviceId, patientId } = formData;
    const appointmentData = {
      patient_pesel: BigInt(patientPesel),
      patient_id: parseInt(patientId),
      doctor_id: parseInt(doctorId),
      service_id: parseInt(serviceId),
      date: new Date("2023-01-15"),
      time: new Date("2023-01-15"),
      financing: "NFZ" as FinancingEnum,
    };

    try {
        const createdAppointment = await prisma.appointments.create({
            data: {
              ...appointmentData,
            },
            include: {
              doctors: true,
              patients: true,
              services: true,
            },
          });;
          return createdAppointment;

    } catch (error: any) {
      throw new Error(error);
    } finally {
      revalidatePath("/registration");
    }


}
