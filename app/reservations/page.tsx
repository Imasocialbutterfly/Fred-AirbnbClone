import ClientOnly from "@/app/components/ClientOnly"
import EmptyState from "@/app/components/EmptyState"
import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations"
import ReservationsClient from "./ReservationsClient"

const ReservationPage = async () => {
    const currentUser = await getCurrentUser()

    if(!currentUser) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="Unauthorized"
                    subtitle="Please Login"
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({
        authorId: currentUser.id
    })

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="No reservations found"
                    subtitle="Looks liek you have no reservations on your property"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <ReservationsClient 
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default ReservationPage