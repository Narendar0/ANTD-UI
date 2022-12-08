import styles from "../styles/Home.module.css";
import { Col, Row, Button, List, Card, Tabs, Menu, Layout } from "antd";
// const { Header } = Layout;
import {
  RightOutlined,
  CheckCircleFilled,
  ArrowRightOutlined,
  // DownOutlined,
} from "@ant-design/icons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <div className={styles.top}>
        <div className="container">
          <div className={styles["head-allign"]}>
            <div className={styles.topLeft}>
              <Image src="/logo/footer-logo-1.png" width={120} height={30} />
            </div>
            <div className={styles.topCenter}>
              <ul className={styles.topList}>
                <li className={styles.topListItem}>
                  Demos
                  <DownOutlined />
                </li>
                <li className={styles.topListItem}>
                  Service
                  <DownOutlined />
                </li>
                <li className={styles.topListItem}>
                  Portfolio
                  <DownOutlined />
                </li>
                <li className={styles.topListItem}>
                  pages
                  <DownOutlined />
                </li>
                <li className={styles.topListItem}>
                  Blog
                  <DownOutlined />
                </li>
                <li className={styles.topListItem}>contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Header className={styles["back-color"]}>
        <div className={styles["head-allign"]}>
          <Image src="/logo/footer-logo-1.png" width={120} height={30} />
          <div className={styles.topCenter}>
            <ul className={styles.topList}>
              <li className={styles.topListItem}>
                Demos
                <DownOutlined />
              </li>
              <li className={styles.topListItem}>
                Service
                <DownOutlined />
              </li>
              <li className={styles.topListItem}>
                Portfolio
                <DownOutlined />
              </li>
              <li className={styles.topListItem}>
                pages
                <DownOutlined />
              </li>
              <li className={styles.topListItem}>
                Blog
                <DownOutlined />
              </li>
              <li className={styles.topListItem}>contact</li>
            </ul>
          </div>
        </div>
      </Header> */}

      <div className={styles["banner-section"]}>
        <div className="container">
          <Row justify="space-around" align="middle">
            <Col xs={24} lg={12}>
              <Image
                className={styles["top-img-1"]}
                src="/logo/shape-1.png"
                width={100}
                height={100}
              />
              <h2 className={styles.text}>Brand,Design & Development Agency</h2>
              <p className={styles.content}>
                In the end, I would say keep visiting our website and enjoy the
                quality content. In the end, I would say keep visiting our
                website and enjoy the quality content. In the end, I would say
                keep visiting
              </p>
              <Button className={styles["banner-btn"]} type="primary">
                Lets Talk Us
                <RightOutlined />
              </Button>
              {/* <Image
                className={styles["top-img-2"]}
                src="/logo/bg-shape-1.png"
                width={1000}
                height={1000}
              /> */}
            </Col>
            <Col className={styles["banner-imgs"]} xs={24} lg={12}>
              <Image
                className={styles["banner-img"]}
                src="/logo/hero-one-img-2.jpg"
                width={350}
                height={500}
                alt=""
              />
              <Image
                className={styles["dot-img"]}
                src="/logo/shape-2.png"
                width={15}
                height={15}
                alt=""
              />
              <Image
                className={styles["seal-img"]}
                src="/logo/circle-logo-1.png"
                width={130}
                height={130}
                alt=""
              />
              <Image
                className={styles["plus-img"]}
                src="/logo/shape-3.png"
                width={15}
                height={15}
                alt=""
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles["about-section"]}>
        <Row justify="space-around" align="middle">
          <Col className={styles["img-abt"]} xs={24} lg={12}>
            <Image
              className={styles["banner-img"]}
              src="/logo/about-1.jpg"
              width={350}
              height={500}
              alt=""
            />
            <Image
              className={styles["seal-img-2"]}
              src="/logo/circle-logo-2.png"
              width={130}
              height={130}
              alt=""
            />
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.abt}>
              {/* <Image
                className={styles["back-img"]}
                src="/logo/border-1.png"
                width={150}
                height={70}
                alt=""
              /> */}
              <p className={styles["header-blue-about"]}>About Us</p>
              <h2 className={styles["text-abt"]}>
                We`re Creative Agency Since 1993
              </h2>
              <p className={styles["header-blue"]}>
                Professional Design Agency To Provide Solutions
              </p>
              <p className={styles["content-about"]}>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
              </p>
              <List className={styles.list}>
                <List.Item>
                  <CheckCircleFilled className={styles["check-point"]} />
                  Digital Creative Agency
                </List.Item>
                <List.Item>
                  <CheckCircleFilled className={styles["check-point"]} />
                  Professional Problems Solutions
                </List.Item>
                <List.Item>
                  <CheckCircleFilled className={styles["check-point"]} />
                  Web Design & Development
                </List.Item>
              </List>
              <Button className={styles["btn-pri"]}>
                Learn More Us
                <RightOutlined />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container">
        <div className={`${styles["service-section"]} mt-30`}>
          {/* <Image
          className={styles["round-img"]}
          src="/logo/border-1.png"
          width={150}
          height={70}
          alt=""
        /> */}
          <span className={styles.color}>Services</span>
          <h2 className={styles["text-center"]}>Creative Design Solutions</h2>
          <p className={styles["content-center"]}>
            Professional Design Agency To Provide Solutions
          </p>
          <div className={styles["site-card-wrapper"]}>
            <Row
              gutter={[16, { xs: 0, sm: 16, md: 24, lg: 32 }]}
              justify="center"
              align="middle"
              className={styles.cards}
            >
              <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                <Card
                  style={{
                    width: 240,
                  }}
                  className={styles["card-col"]}
                  bordered={false}
                  cover={<img src="/logo/img-4.jpg" alt="" />}
                >
                  <span className={styles["inner-txt"]}>Strategy</span>
                  <List className={styles.lists}>
                    <List.Item className={styles["list-item"]}>
                      <ArrowRightOutlined className={styles["arrow-point"]} />
                      Product Management
                    </List.Item>
                    <List.Item className={styles["list-item"]}>
                      <ArrowRightOutlined className={styles["arrow-point"]} />
                      MVP Definition
                    </List.Item>
                    <List.Item className={styles["list-item"]}>
                      <ArrowRightOutlined className={styles["arrow-point"]} />
                      Product Strategy
                    </List.Item>
                    <div className={styles["btn-under-line"]}>
                      <Button type="link">
                        Read More
                        <ArrowRightOutlined className={styles["arrow-point"]} />
                      </Button>
                    </div>
                  </List>
                </Card>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                <Card
                  style={{
                    width: 240,
                  }}
                  className={styles["card-col"]}
                  bordered={false}
                  cover={<img src="/logo/img-4.jpg" alt="" />}
                >
                  <span className={styles["inner-txt"]}>Product Design</span>
                  <List className={styles.lists}>
                    <List.Item className={styles["list-item"]}>
                      <ArrowRightOutlined className={styles["arrow-point"]} />
                      Product Management
                    </List.Item>
                    <List.Item className={styles["list-item"]}>
                      <ArrowRightOutlined className={styles["arrow-point"]} />
                      MVP Definition
                    </List.Item>
                    <List.Item className={styles["list-item"]}>
                      <ArrowRightOutlined className={styles["arrow-point"]} />
                      Product Strategy
                    </List.Item>
                    <div className={styles["btn-under-line"]}>
                      <Button type="link">
                        Read More
                        <ArrowRightOutlined className={styles["arrow-point"]} />
                      </Button>
                    </div>
                  </List>
                </Card>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                <Card
                  style={{
                    width: 240,
                  }}
                  className={styles["card-col"]}
                  bordered={false}
                  cover={<img src="/logo/img-4.jpg" alt="" />}
                >
                  <span className={styles["inner-txt"]}>Development</span>
                  <List className={styles.lists}>
                    <List.Item className={styles["list-item"]}>
                      <ArrowRightOutlined className={styles["arrow-point"]} />
                      Product Management
                    </List.Item>
                    <List.Item className={styles["list-item"]}>
                      <ArrowRightOutlined className={styles["arrow-point"]} />
                      MVP Definition
                    </List.Item>
                    <List.Item className={styles["list-item"]}>
                      <ArrowRightOutlined className={styles["arrow-point"]} />
                      Product Strategy
                    </List.Item>
                    <div className={styles["btn-under-line"]}>
                      <Button type="link">
                        Read More
                        <ArrowRightOutlined className={styles["arrow-point"]} />
                      </Button>
                    </div>
                  </List>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={styles["latest-work-section"]}>
        <span className={styles["header-blue-latest"]}>Latest Work</span>
        <h2 className={styles["text-head"]}>Professional Experience</h2>
        <p className={styles.contents}>
          Professional Design Agency To Provide Solutions
        </p>
        <Tabs className={styles["content-tab"]} defaultActiveKey="1">
          <Tabs.TabPane tab="Show All" key="1">
            <Row
              className="tab"
              gutter={[48, 32]}
              justify="center"
              align="middle"
            >
              <Col xs={24} xl={8}>
                <Card className={styles["card-body"]}>
                  <Image
                    src="/logo/img-1.jpg"
                    width={270}
                    height={316}
                    alt=""
                  />
                  <h2 className={styles["card-text-head"]}>Dashboard Design</h2>
                  <h4 className={styles["card-text"]}>Creative Design</h4>
                </Card>
              </Col>
              <Col xs={24} xl={8}>
                <Card>
                  <Image
                    src="/logo/img-2.jpg"
                    width={270}
                    height={316}
                    alt=""
                  />
                  <h2 className={styles["card-text-head"]}>Dashboard Design</h2>
                  <h4 className={styles["card-text"]}>Creative Design</h4>
                </Card>
              </Col>
              <Col xs={24} xl={8}>
                <Card>
                  <Image
                    src="/logo/img-3.jpg"
                    width={270}
                    height={316}
                    alt=""
                  />
                  <h2 className={styles["card-text-head"]}>Dashboard Design</h2>
                  <h4 className={styles["card-text"]}>Creative Design</h4>
                </Card>
              </Col>
              <Col xs={24} xl={8}>
                <Card>
                  <Image
                    src="/logo/img-4.jpg"
                    width={270}
                    height={316}
                    alt=""
                  />
                  <h2 className={styles["card-text-head"]}>Dashboard Design</h2>
                  <h4 className={styles["card-text"]}>Creative Design</h4>
                </Card>
              </Col>
              <Col xs={24} xl={8}>
                <Card>
                  <Image
                    src="/logo/img-5.jpg"
                    width={270}
                    height={316}
                    alt=""
                  />
                  <h2 className={styles["card-text-head"]}>Dashboard Design</h2>
                  <h4 className={styles["card-text"]}>Creative Design</h4>
                </Card>
              </Col>
              <Col xs={24} xl={8}>
                <Card>
                  <Image
                    src="/logo/img-6.jpg"
                    width={270}
                    height={316}
                    alt=""
                  />
                  <h2 className={styles["card-text-head"]}>Dashboard Design</h2>
                  <h4 className={styles["card-text"]}>Creative Design</h4>
                </Card>
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Design" key="2"></Tabs.TabPane>
          <Tabs.TabPane tab="Branding" key="3"></Tabs.TabPane>
          <Tabs.TabPane tab="Development" key="4"></Tabs.TabPane>
          <Tabs.TabPane tab="SEO" key="5"></Tabs.TabPane>
          <Tabs.TabPane tab="UI/UX Design" key="6"></Tabs.TabPane>
        </Tabs>
      </div>
      <div className={styles["footer-section"]}>
        <span className={styles["footer-head"]}>Lets Work</span>
        {/* <Image
          className={styles["round-footer-img"]}
          src="/logo/border-1.png"
          width={150}
          height={70}
          alt=""
        /> */}
        <p className={styles["footer-content"]}>
          Experience and Innovative <br />
          Solutions For Creative Design
          <br /> & Development Agency
        </p>
        <Button className={styles["btn-pri-footer"]} type="primary">
          Lets Work Together
          <RightOutlined />
        </Button>
        {/* <Image
          className={styles["map-img"]}
          src="/logo/map.png"
          width={380}
          height={380}
          alt=""
        /> */}
        {/* <Image
          className={styles["footer-last-img"]}
          src="/logo/img-1(1).jpg"
          width={600}
          height={350}
          alt=""
        /> */}
      </div>
    </>
  );
}
