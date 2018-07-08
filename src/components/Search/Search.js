import React from 'react';
import { SearchStyled, InputStyled, ButtonStyled } from './searchStyles';
import { connect } from 'react-redux';
import { getSearchRequest } from './searchActions';

class Search extends React.PureComponent {
  state = {
    searchValue: ''
  };

  searchClick = () => {
    this.props.getSearchRequest(this.state.searchValue);
  };

  searchChange = event => {
    this.setState({
      searchValue: event.target.value
    });
  };

  render() {
    return (
      <SearchStyled>
        <InputStyled
          value={this.state.searchValue}
          onChange={this.searchChange}
          placeholder="Название сериала"
        />
        <ButtonStyled onClick={this.searchClick}>Найти</ButtonStyled>
      </SearchStyled>
    );
  }
}

const mapDispatchToProps = { getSearchRequest };

export default connect(
  null,
  mapDispatchToProps
)(Search);
