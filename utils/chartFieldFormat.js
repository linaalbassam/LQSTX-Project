exports.formatInField = async function(field){
    switch (field) {
        //AMZ
        case "flightsInboundTotal":
            field ="flights.inbound_total"
            break;
        case "flightsInboundLate":
            field ="flights.inbound_late"
            break;
        case "flightsOutboundTotal":
            field ="flights.outbound_total"
            break;
        case "flightsOutboundLate":
            field ="flights.outbound_late"
            break;
        case "flightsOutLateDueToLCS":
            field ="flights.out_late_due_to_LCS"
            break;
        case "trucksInbound":
            field ="trucks.inbound"
            break;
        case "trucksInboundLate":
            field ="trucks.inbound_late"
            break;
        case "trucksOutbound":
            field ="trucks.outbound"
            break;
        case "trucksOutboundLate":
            field ="trucks.outbound_late"
            break;
        case "trucksOutLateDueToLCS":
            field ="trucks.out_late_due_to_LCS"
            break;
        case "mopvpHeadCountPlan":
            field ="mopvp.head_count_plan"
            break;
        case "mopvpHeadCountAct":
            field ="mopvp.head_count_act"
            break;
        case "mopvpHoursPlan":
            field ="mopvp.hours_plan"
            break;
        case "mopvpHoursAct":
            field ="mopvp.hours_act"
            break;              
        //USPS    
        case "inbound":
            field = "inbound";
            break;
        case "inboundLate":
            field = "inbound_late";
            break;
        case "outbound":
            field = "outbound";
            break;
        case "outboundLate":
            field = "outbound_late";
            break;
        case "inLateDueToLDS":
            field = "in_late_due_to_LDS";
            break;
        case "outLateDueToLDS":
            field = "out_late_due_to_LDS";
            break;
        case "totalContainers":
            field = "total_containers";
            break;
        case "totalHours":
            field = "total_hours";
            break;
        case "containersPerHour":
            field = "containers_per_hour";
            break;
        ///Department
        case "totalWorked":
            field = "total_worked";
            break;
        case "billable":
            field = "billable";
            break;
        case "nonBillable":
            field = "non_billable";
            break;
        case "totalOnWO":
            field = "total_on_WO";
            break;
        case "percentBillable":
            field = "percent_billable";
            break;
        case "percentOnWO":
            field = "percent_on_WO";
            break;
        default:
            field = "inbound";
    };
 
    return field;
 
}
 
exports.formatOutField = async function (field) {
    switch (field) {
        //AMZ
        case"flights.inbound_total":
            field ="Flights: Inbound Total"
            break;
        case"flights.inbound_late":
            field ="Flights: Inbound Late"
            break;
        case"flights.outbound_total":
            field ="Flights: Outbound Total"
            break;
        case "flights.outbound_late":
            field ="Flights: Outbound Late"
            break;
        case "flights.out_late_due_to_LCS":
            field ="Flights: Out Late due to LCS"
            break;
        case "trucks.inbound":
            field ="Trucks: Inbound"
            break;
        case "trucks.inbound_late":
            field ="Trucks: Inbound Late"
            break;
        case "trucks.outbound":
            field ="Trucks: Outbound"
            break;
        case "trucks.outbound_late":
            field ="Trucks: Outbound Late"
            break;
        case "trucks.out_late_due_to_LCS":
            field ="Trucks: Out Late due to LCS"
            break;
        case "mopvp.head_count_plan":
            field ="MOPvP: Head Count Plan"
            break;
        case "mopvp.head_count_act":
            field ="MOPvP: Head Count Act"
            break;
        case "mopvp.hours_plan":
            field ="MOPvP: Hours Plan"
            break;
        case "mopvp.hours_act":
            field ="MOPvP: Hours Act"
            break;              
        //USPS
        case "inbound":
            field = "Inbound";
            break;
        case "inbound_late":
            field = "Inbound Late";
            break;
        case "outbound":
            field = "Outbound";
            break;
        case "outbound_late":
            field = "Outbound Late";
            break;
        case "in_late_due_to_LDS":
            field = "In Late Due to LDS";
            break;
        case "out_late_due_to_LDS":
            field = "Out Late Due to LDS";
            break;
        case "total_containers":
            field = "Total Containers";
            break;
        case "total_hours":
            field = "Total Hours";
            break;
        case "containers_per_hour":
            field = "Containers Per Hour";
            break;
        case "total_worked":
            field = "Total Worked";
            break;
        case "billable":
            field = "Billable";
            break;
        case "non_billable":
            field = "Non Billable";
            break;
        case "total_on_WO":
            field = "Total on WO";
            break;
        case "percent_billable":
            field = "Percent Billable";
            break;
        case "percent_on_WO":
            field = "Percent on WO";
            break;
        default:
            field = "Inbound";
    };
 
    return field;
 
}
 
 

