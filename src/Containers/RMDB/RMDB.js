import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Card, Col, Row } from "antd";
import API from "../../API/API";
import { connect } from "react-redux";
import configurationActionTypes from "../../Redux/ActionTypes/ConfigurationActionTypes";

const { Header, Content, Footer } = Layout;

class RMDB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    API.getConfiguration().then(response => {
      console.log(response.data);
      this.props.initImageConfig(response.data.images);

      API.discover().then(response => {
        console.log(response.data);
        this.setState({ movies: response.data.results });
      });
    });
  }

  getMovieCards = () => {
    return this.state.movies.map(movie => {
      return (
        <Col style={{ margin: "1.5rem" }}>
          <Card>
            <img
              src={`${this.props.imageConfig.base_url}${
                this.props.imageConfig.poster_sizes[1]
              }${movie.poster_path}`}
            />
          </Card>
        </Col>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content
            style={{
              padding: "5rem 15rem"
            }}
          >
            <Row type="flex" justify="start" align="middle">
              {this.getMovieCards()}
            </Row>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </React.Fragment>
    );
  }
}

export default connect(
  state => {
    return {
      imageConfig: state.ConfigurationReducer.imageConfig
    };
  },
  dispatch => {
    return {
      initImageConfig: config =>
        dispatch({
          type:
            configurationActionTypes.ACTIONTYPE_CONFIGURATION_SET_IMAGE_CONFIG,
          payload: config
        })
    };
  }
)(RMDB);
