import React from "react";
import { Checkbox, Heading, HStack, VStack, Text, Box, Center, NativeBaseProvider } from "native-base";

const Example = () => {
  const [groupValue, setGroupValue] = React.useState(["Photography", "Gardening"]);
  return <Box alignItems="center">
      <VStack space={2}>
        <HStack alignItems="baseline">
          <Heading fontSize="lg">Availability</Heading>
        </HStack>
        <VStack>
          <Box>
            <Text>Selected: ({groupValue.length})</Text>
          </Box>
        </VStack>
        <Checkbox.Group colorScheme="green" defaultValue={groupValue} accessibilityLabel="pick an item" onChange={values => {
        setGroupValue(values || []);
      }}>
          <Checkbox value="Photography" my="1">
          MON
          </Checkbox>
          <Checkbox value="Writing" my="1">
          TUE
          </Checkbox>
          <Checkbox value="Gardening" my="1">
          WED
          </Checkbox>
          <Checkbox value="Cooking" my="1">
          THUR
          </Checkbox>
          <Checkbox value="Cooking" my="1">
          FRI
          </Checkbox>
        </Checkbox.Group>
      </VStack>
    </Box>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center  px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    