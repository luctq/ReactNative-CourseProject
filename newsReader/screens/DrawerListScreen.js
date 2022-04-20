import React, {Component} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackListScreen from "./StackListScreen";
const Drawer = createDrawerNavigator();
class DrawerListScreen extends Component {
    render() {
        return(
            <Drawer.Navigator> 
                <Drawer.Screen name="General" component={StackListScreen} initialParams={{typeScreen: "GeneralNews"}}  options={{ unmountOnBlur: true}}/>
                <Drawer.Screen name="Bussiness" component={StackListScreen} initialParams={{typeScreen: "BusinessNews"}} options={{ unmountOnBlur: true}} />
                <Drawer.Screen name="Entertainment" component={StackListScreen} initialParams={{typeScreen: "EntertainmentNews"}}  options={{ unmountOnBlur: true}}/>
                <Drawer.Screen name="Health" component={StackListScreen} initialParams={{typeScreen: "HealthNews"}} options={{ unmountOnBlur: true}} />
                <Drawer.Screen name="Science" component={StackListScreen} initialParams={{typeScreen: "ScienceNews"}} options={{ unmountOnBlur: true}} />
                <Drawer.Screen name="Sport" component={StackListScreen} initialParams={{typeScreen: "SportsNews"}} options={{ unmountOnBlur: true}} />
                <Drawer.Screen name="Technology" component={StackListScreen} initialParams={{typeScreen: "TechnologyNews"}} options={{ unmountOnBlur: true}} />
            </Drawer.Navigator>
        );
    }
}
export default DrawerListScreen;