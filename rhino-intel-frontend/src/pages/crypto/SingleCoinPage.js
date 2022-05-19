import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../../components/cryptocoininfo";
import { SingleCoin } from "../../config/cryptoapi";
import {
  LinearProgress,
  makeStyles,
  Typography,
  Container,
  createTheme,
} from "@material-ui/core";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router-dom";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function createData(currentPrice, lowPrice, highPrice, deltaPricePercent) {
  return { currentPrice, lowPrice, highPrice, deltaPricePercent };
}

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const history = useHistory();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },
    description: {
      width: "100%",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
    },
  }));

  const classes = useStyles();
  const profit = coin?.price_change_percentage_24h > 0;

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant="h3"
          className={classes.heading}
          style={{ color: "white", paddingBottom: "1rem" }}
        >
          {coin?.name}
        </Typography>

        <Typography
          variant="p"
          className={classes.description}
          style={{ color: "white", padding: "1rem" }}
        >
          <div dangerouslySetInnerHTML={{ __html: coin?.description.en }} />
        </Typography>
      </div>

      <div className="wrapper" style={{ float: "left" }}>
        <div style={{ paddingLeft: "1rem", paddingTop: "1.5rem" }}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 400 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="right">Current </TableCell>
                  <TableCell align="right">24H Low </TableCell>
                  <TableCell align="right">24H High </TableCell>
                  <TableCell align="right">24H Change</TableCell>
                  <TableCell align="right">1HR Change</TableCell>
                  <TableCell align="right">7D Change</TableCell>
                  <TableCell align="right">14D Change</TableCell>
                  <TableCell align="right">30D Change</TableCell>
                  <TableCell align="right">60D Change</TableCell>
                  <TableCell align="right">200D Change</TableCell>
                  <TableCell align="right">1YR Change</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="right">
                    ${coin?.market_data.current_price.usd}
                  </TableCell>
                  <TableCell align="right">
                    ${coin?.market_data.low_24h.usd}
                  </TableCell>
                  <TableCell align="right">
                    ${coin?.market_data.high_24h.usd}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: profit > 0 ? "green" : "red" }}
                  >
                    {
                      coin?.market_data.price_change_percentage_24h_in_currency
                        .usd
                    }
                    %
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: profit > 0 ? "green" : "red" }}
                  >
                    {
                      coin?.market_data.price_change_percentage_1h_in_currency
                        .usd
                    }
                    %
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: profit > 0 ? "green" : "red" }}
                  >
                    {
                      coin?.market_data.price_change_percentage_7d_in_currency
                        .usd
                    }
                    %
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: profit > 0 ? "green" : "red" }}
                  >
                    {
                      coin?.market_data.price_change_percentage_14d_in_currency
                        .usd
                    }
                    %
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: profit > 0 ? "green" : "red" }}
                  >
                    {
                      coin?.market_data.price_change_percentage_30d_in_currency
                        .usd
                    }
                    %
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: profit > 0 ? "green" : "red" }}
                  >
                    {
                      coin?.market_data.price_change_percentage_60d_in_currency
                        .usd
                    }
                    %
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: profit > 0 ? "green" : "red" }}
                  >
                    {
                      coin?.market_data.price_change_percentage_200d_in_currency
                        .usd
                    }
                    %
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: profit > 0 ? "green" : "red" }}
                  >
                    {
                      coin?.market_data.price_change_percentage_1y_in_currency
                        .usd
                    }
                    %
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div style={{ paddingLeft: "1rem", paddingTop: "1.5rem" }}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 400 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="right">Rank </TableCell>
                  <TableCell align="right">Market Cap </TableCell>
                  <TableCell align="right">Market Cap 24H Change</TableCell>
                  <TableCell align="right">Total Volume</TableCell>
                  <TableCell align="right">Diluted Valuation</TableCell>
                  <TableCell align="right">Current Supply</TableCell>
                  <TableCell align="right">Total Supply</TableCell>
                  <TableCell align="right"> Liquidity</TableCell>
                  <TableCell align="right"> PI Score</TableCell>


                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="right">{coin?.market_cap_rank}</TableCell>
                  <TableCell align="right">
                    ${coin?.market_data.market_cap.usd}
                  </TableCell>
                  <TableCell align="right" style={{ color: profit > 0 ? "green" : "red" }}>
                    ${Math.round(coin?.market_data.market_cap_change_24h_in_currency.usd * 100) / 100} ({Math.round(coin?.market_data.market_cap_change_percentage_24h_in_currency.usd * 100) / 100}%)
                  </TableCell>
                  <TableCell align="right">${coin?.market_data.total_volume.usd}</TableCell>
                  <TableCell align="right">${coin?.market_data.fully_diluted_valuation.usd}</TableCell>
                  <TableCell align="right">{coin?.market_data.circulating_supply}</TableCell>
                  <TableCell align="right">{coin?.market_data.total_supply}</TableCell>
                  <TableCell align="right">{coin?.liquidity_score}</TableCell>
                  <TableCell align="right">{coin?.public_interest_score}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div style={{ padding: "1rem" }}>
          <CoinInfo coin={coin} />
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
