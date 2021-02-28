import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Main from '../screens/Main.js';
import AdminLogin from '../screens/admin/admin_login';
import AdminHome from '../screens/admin/admin_home';
import StudentLogin from '../screens/student/student_login';
import studenthome from '../screens/student/student_home';
import studentprof from '../screens/student/Student_profile';
import CompanyLogin from '../screens/company/company_login';
import CompanyHome from '../screens/company/company_home';
import Vacancy from '../screens/company/Vacancy_post';


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="StudentLogin" component={StudentLogin} />
        <Stack.Screen name="studenthome" component={studenthome} />
        <Stack.Screen name="StudentProfile" component={studentprof} />
        <Stack.Screen name="CompanyLogin" component={CompanyLogin} />
        <Stack.Screen name="CompanyHome" component={CompanyHome} />
        <Stack.Screen name="Vacancy" component={Vacancy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;