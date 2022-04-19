import React, {Component} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackListScreen from "./StackListScreen";
const TopTab = createDrawerNavigator();
class TopTabListScreen extends Component {
    render() {
        return(
            <TopTab.Navigator> 
                <TopTab.Screen name="General" component={StackListScreen} initialParams={{typeScreen: "GeneralNews"}}  options={{ unmountOnBlur: true}}/>
                <TopTab.Screen name="Bussiness" component={StackListScreen} initialParams={{typeScreen: "BusinessNews"}} options={{ unmountOnBlur: true}} />
                <TopTab.Screen name="Entertainment" component={StackListScreen} initialParams={{typeScreen: "EntertainmentNews"}}  options={{ unmountOnBlur: true}}/>
                <TopTab.Screen name="Health" component={StackListScreen} initialParams={{typeScreen: "HealthNews"}} options={{ unmountOnBlur: true}} />
                <TopTab.Screen name="Science" component={StackListScreen} initialParams={{typeScreen: "ScienceNews"}} options={{ unmountOnBlur: true}} />
                <TopTab.Screen name="Sport" component={StackListScreen} initialParams={{typeScreen: "SportsNews"}} options={{ unmountOnBlur: true}} />
                <TopTab.Screen name="Technology" component={StackListScreen} initialParams={{typeScreen: "TechnologyNews"}} options={{ unmountOnBlur: true}} />
            </TopTab.Navigator>
        );
    }
}
export default TopTabListScreen;