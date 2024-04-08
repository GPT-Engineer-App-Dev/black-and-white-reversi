import { Grid, GridItem, Circle, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const BOARD_SIZE = 8;

const Index = () => {
  const [board, setBoard] = useState(Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill("green")));

  return (
    <div>
      <Text>Current Player: ...</Text>

      <Grid templateColumns={`repeat(${BOARD_SIZE}, 1fr)`} gap={1}>
        {board.map((row, rowIdx) =>
          row.map((color, colIdx) => (
            <GridItem key={`${rowIdx}-${colIdx}`} w="100%" h="12" bg="gray.100" display="flex" justifyContent="center" alignItems="center">
              <Circle size="40px" bg={color} />
            </GridItem>
          )),
        )}
      </Grid>

      <Button>Pass</Button>
    </div>
  );
};

export default Index;
