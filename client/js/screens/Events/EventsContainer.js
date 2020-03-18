import React, {Component} from 'react';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import Events from '../Events';
import Loader from '../../components/Loader';
const ALL_EVENTS = gql`
  {
    events {
      id
      title
      description
      thumbnail_url
      location_name
      location_address
      location {
        id
      }
      price
      maxTickets
      soldTickets
      speakers {
        id
        owner {
          name
        }
      }
    }
  }
`;
export default class EventsContainer extends Component {
  render() {
    return (
      <Query query={ALL_EVENTS}>
        {({data, loading, error}) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          return (
            <>
              {console.log(data.events)};
              <Events navigation={this.props.navigation} events={data.events} />
            </>
          );
        }}
      </Query>
    );
  }
}
