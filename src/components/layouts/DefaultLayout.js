import { Box, Container, Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React from "react";

const DefaultLayout = () => {
  return (
    <>
			<Box bgcolor={ blue[200] } color="white" pt={10} pb={15}>
        <Container maxWidth={"md"}>
          <Typography variant="h5">Technext Blog</Typography>
        </Container>
      </Box>

      <Box>
        <Container maxWidth={"md"}>
          <Box bgcolor="white" py={15} mt={-10} borderRadius={16} boxShadow={2}>
            <Typography variant="h5">bangladesh</Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DefaultLayout;
