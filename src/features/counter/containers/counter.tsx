import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {compose} from "redux";
import {Button} from "../../../ui/atoms/button";
import {decrement, increment} from "../actions";

const mapStateToProps = (state) => ({
  count: state.counter.count
});

const mapDispatchToProps = (dispatch) => ({
  increment: (count) => dispatch(increment(count)),
  decrement: (count) => dispatch(decrement(count))
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

interface CounterProps {
  increment(count: number): void
  decrement(count: number): void
  count: number
}

const CounterView: React.FC<CounterProps> = ({ increment, decrement, count }) => {
  return (
    <div className='counter'>
      <span>{count}</span>
      <div>
        <Button
          onClick={() => increment(count - 1)}
          label='increment number'>
          -
        </Button>
        <Button
          onClick={() => decrement(count + 1)}
          label='decrement number'>
          +
        </Button>
      </div>
    </div>
  );
};

export const CounterPage = enhance(CounterView);
