import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginActions from "../actions/login";
class Login extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  state = {
    username: null,
    user: {}
  };
  render() {
    const { loginRequest, error } = this.props;
    const { username } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {error ? "Nome de usuário incorreto" : "Digite o seu usuário"}
        </Text>
        <TextInput
          value={this.state.value}
          placeholder={"Ex. mateuschaves"}
          onChangeText={username => this.setState({ username })}
        />
        <Button title="Entrar" onPress={_ => loginRequest(username)} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(loginActions, dispatch);

const mapStateToProps = state => {
  console.log(state);
  return { error: state.login.error, user: state.login.user };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    margin: 10
  }
});
