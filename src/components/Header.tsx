import { Box, Chip, Grid, Typography } from "@mui/material";

const Header = ({ score, total }: { score: number; total: number }) => {
  return (
    <Box>
      <Typography variant="h3" align="center" marginBottom={"32px"}>
        Trivia Quiz
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent={"space-between"}
        marginBottom={"32px"}
      >
        <Grid item fontWeight={500} fontSize={"24px"}>
          <Chip
            sx={{ fontSize: "20px" }}
            label={
              <div>
                <span>Score: </span>
                <span className="font-semibold">{score}</span>
              </div>
            }
            color="success"
            size="medium"
          />
        </Grid>
        <Grid item>
          <Chip label={`Total: ${total}`} color="default" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
