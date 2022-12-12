import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component"; 

// import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
//   const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      <SafeArea>
      <Text>Hello</Text>
      </SafeArea>
    </NavigationContainer>
  );
};