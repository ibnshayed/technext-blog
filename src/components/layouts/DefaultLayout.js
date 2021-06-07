import { Box, Container, Typography } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";
import React from "react";
import PostPage from "../pages/PostPage";

const DefaultLayout = () => {
  return (
    <>
      <Box bgcolor={blue[200]} color="white" pt={10} pb={15}>
        <Container maxWidth={"md"}>
          <Typography
            variant="h5"
            style={{ textTransform: "uppercase" }}
            fontWeight="bold"
          >
            Technext Blog
          </Typography>
        </Container>
      </Box>

      <Box>
        <Container maxWidth={"md"}>
          <Box
            minHeight="80vh"
            bgcolor={grey[200]}
            py={10}
            mt={-10}
            mb={10}
            borderRadius={16}
            boxShadow={1}
          >
            <PostPage />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DefaultLayout;
