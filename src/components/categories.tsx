import { useEffect, useState } from "react";
import { RequestCate, categoryModel, gamesModel } from "../model/modelData";
import { getCategoies, getGames } from "../service/service";
import { Button, ButtonGroup, Row, Col } from "reactstrap";

const Categories = () => {
  const [listCategory, setListCategory] = useState<categoryModel[]>([]);
  const [listGames, setListGames] = useState<gamesModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [selectCateGory, setSelectCateGory] = useState(1);
  const [countData, setCountData] = useState(1);

  const getCateory = async () => {
    const responseGetList = await getCategoies();
    setListCategory(responseGetList?.data ?? []);
  };
  const getGamesData = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      const param: RequestCate = {
        idCatogory: selectCateGory,
        Count: countData,
      };
      const responseGetList = await getGames(param);
      setListGames(responseGetList.data ?? []);
      setIsLoading(false);
    }, 100);
  };
  useEffect(() => {
    getCateory();
  }, []);

  useEffect(() => {
    getGamesData();
  }, [selectCateGory, countData]);

  return (
    <>
      <div>
        <ButtonGroup className="d-flex flex-wrap flex-xl-nowrap flex-lg-nowrap flex-md-nowrap ml-0 py-2 py-lg-0 mx-xl-2 mx-lg-0">
          {listCategory.map((item) => (
            <Button
              key={`filterTypeGroup-${item?.id}`}
              className="px-2 px-xl-3"
              color={
                selectCateGory === item?.id ? "secondary" : "outline-secondary"
              }
              onClick={() => {
                if (selectCateGory !== item?.id) {
                  setSelectCateGory(item?.id);
                  setCountData(1);
                  setListGames([]);
                }
              }}
            >
              {item.Name}
            </Button>
          ))}
        </ButtonGroup>
        <div className="d-flex flex-wrap flex-xl-nowrap flex-lg-nowrap flex-md-nowrap ml-0 py-2 py-lg-0 mx-xl-2 mx-lg-0 mt-4">
          {isLoading ? (
            <div className="spinner-border v-center" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <Row className="ml-5">
              {listGames.map((item) => (
                <Col xs="auto" sm={5} className="mt-2">
                  <img
                    src={item.UrlImage}
                    alt="avatar"
                    style={{ width: "600px", height: "400px" }}
                  />
                  <span className="font-monospace"></span>
                  {item.Name}
                </Col>
              ))}
            </Row>
          )}
        </div>
        {listGames.length > 0 && (
          <div className="v-center">
            <Button
              onClick={() => {
                setCountData(countData + 1);
              }}
            >
              Load more
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Categories;
