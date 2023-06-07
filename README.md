# tunghng.github.io

**Formal Report**

**Team Name: WinFast**

**Members:**
- Le Hoang Tung
- Nguyen Tung Lam
- Nguyen Nhat Minh

**1. Introduction**

This report presents the findings and progress made by Team WinFast in building a prototype to simulate the benefits of vehicle connectivity on a cross street. The objective of the prototype is to demonstrate how vehicles can capture sensor and actuator values from each other, adjusting their speed based on this information. The primary focus is on improving the movement of emergency vehicles, such as ambulances, through congested areas by facilitating smooth passage and reducing delays.

**2. Objectives**

The objectives of the prototype are as follows:

1. Real-time data aggregation: Facilitating communication between vehicles to prevent accidents and enable proactive safety measures.
2. Collision avoidance: Using sensors and connectivity to detect and prevent potential collisions by providing warnings or automatic braking.
3. Emergency assistance: Enabling rapid emergency response through automatic crash notification systems and precise location sharing.
4. Predictive analytics: Utilizing historical data and machine learning algorithms to control the speed of vehicles appropriately.
5. Promoting cooperative behavior among drivers to yield to priority vehicles based on current traffic laws.

**3. Description**

The prototype consists of four vehicles, with one being a prioritized vehicle, an ambulance, and the remaining three being normal vehicles. The ambulance sends signals to other cars to notify them of the emergency situation. The other vehicles process the information of surrounding vehicles to visualize their actions, ensuring they do not interfere with the ambulance while avoiding other vehicles. Due to time constraints, the prototype outputs only the location and speed of the vehicles at a given instance, rather than the entire trajectory.

The dashboard for the prototype includes the following components:

**Ambulance:**
- Utilizes the Google Map API to display the trajectory of the ambulance and nearby vehicles.
- Provides a screen to display safety information, indicating whether it is safe to proceed at the current speed.
- Includes a terminal to output the parameters of the ambulance at specific time intervals.

**Normal vehicles:**
- Utilizes the Google Map API to display the surrounding vehicles.
- Provides a screen to output instructions to the driver.
- Includes a terminal to output the parameters that the vehicle should adhere to in order to avoid collisions.

**4. Methodology**

The methodology employed for the prototype is as follows:

1. Selection of priority vehicle: An ambulance is chosen as the priority vehicle, and three other normal vehicles are positioned at different locations.
2. Maintenance of ambulance speed: The speed of the ambulance is maintained throughout the simulation. When the ambulance approaches an intersection, other normal cars stop to make way for it. An alarm notifies the normal cars to prepare for braking.
3. Collision detection and speed adjustment: The simulation checks for potential collisions and adjusts the speed of other vehicles. Variables are created to represent the vehicles on the crossroad, including essential features such as coordinates, moving direction, speed, and braking status. The check_collision function calculates the distance between two vehicles using their positions and determines if it is below a threshold value. The update_position function updates the vehicle's position based on its speed, direction, and time increment. The is_at_intersection_1 and is_at_intersection_2 functions determine if a vehicle is within the radius of the first and second intersections, respectively. The adjust_speed function modifies the speed of a vehicle based on the speeds of nearby vehicles.
4. Simulation completion: After the simulation is completed, the code prints the speed and position of each vehicle.

**5. Usable APIs**

The following APIs are used in the prototype:

- Vehicle.Body.Lights.IsHighBeamOn
- Vehicle.Cabin.Lights.LightIntensity
- Vehicle.Chassis.SteeringWheel.Angle
- Vehicle.CurrentLocation.Horizontal

Accuracy
- Vehicle.Body.Lights.IsBrakeOn
- Vehicle.ADAS.CruiseControl.IsActive

**6. Possible Ideas**

While not fully implemented due to time limitations, the team generated additional ideas for further improvement:

1. Handling two-way roads: Developing a solution for vehicles moving on two-way roads, considering angular velocity when a vehicle is turning.
2. Addressing sudden stops: Determining suitable solutions when a vehicle is moving straight and the front vehicle suddenly stops.
3. Incorporating exterior factors: Considering external factors such as low-light conditions and vehicles with high beams on opposing each other, issuing warnings to reduce speed.
4. Monitoring broken brakes: Checking if nearby vehicles have broken brakes to slow down and maintain a safe distance.

**7. Conclusion**

The prototype developed by Team WinFast demonstrates the potential benefits of vehicle connectivity on a cross street. By simulating the movement of an ambulance and normal vehicles, the prototype showcases real-time data aggregation, collision avoidance, emergency assistance, and predictive analytics. While further enhancements are possible, the current prototype serves as a foundation for future development in improving the smooth passage of emergency vehicles through congested areas.
