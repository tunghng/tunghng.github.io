import MobileNotifications from "./reusable/MobileNotifications.js"
import StatusTable from "./reusable/StatusTable.js"

const plugin = ({widgets, simulator, vehicle}) => {

    widgets.register("Signals", StatusTable({
        apis: ["Vehicle.Body.Windshield.Front.Wiping.Mode", "Vehicle.Body.Hood.IsOpen", "Vehicle.Body.Hood"],
        vehicle: vehicle,
        refresh: 1000
    }));

    let mobileNotifications = null;
	widgets.register("Mobile", (box) => {
		({printNotification: mobileNotifications} = MobileNotifications({
			apis : null,
			vehicle: null,
			box: box,
			refresh: null,
            paddingTop: 70,
            paddingHorizontal: 25
		}))
	})

    return {
        notifyPhone: (message) => {
            if (mobileNotifications !== null) {
                mobileNotifications(message)
            }
        },
    }

}

export default plugin
