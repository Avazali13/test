import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";

import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../../hooks/useGetUserPosts";
import Heading from "../../ui/Heading";

function ProfilePosts() {
  const { isLoading: isLoad, posts } = useGetUserPosts();
  const noPostsFound = !isLoad && posts.length === 0;
  if (noPostsFound)
    return (
      <Heading
        className="text-center"
        fontSize={{ base: "2rem", md: "2.5rem" }}
        style={{ color: "#29ABE2" }}
      >
        <p className="text-[2rem] md:text-[3rem]">
         There is no posts
        </p>
      </Heading>
    );

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(3,1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isLoad &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h="300px">contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoad && (
        <>
          {posts.map((post) => (
            <ProfilePost post={post} key={post.id} />
          ))}
        </>
      )}
    </Grid>
  );
}

export default ProfilePosts;
