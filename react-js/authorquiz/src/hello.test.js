import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

function Hello(props) {
    return <h1>Hello at {props.now}</h1>;
}

const moment = new Date(1588946400000);

describe('When testing directly, element', () => {
    let result;
    beforeAll(() => {
        result = Hello({now: moment.toISOString});
    }); 

    it('should return a value', () => {
        expect(result).not.toBeNull();
    });

    it('should be H1 element', () => {
        expect(result.type).toBe('h1');
    });

    it('should have children ', () => {
        expect(result.props.children).toBeTruthy();
    });
});

describe('When testing with ReactDOM', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Hello now={moment.toISOString()} />, div);
    });
});

Enzyme.configure({ adapter: new Adapter() });

describe('When testing with Enzyme', () => {
    it('should be H1 element', () => {
        const wrapper = shallow(<Hello now={moment.toISOString()} />);
        expect(wrapper.find('h1').length).toBe(1);
    });

    it('contains Hello at 2020-05-08T14:00:00.000Z', () => {
        const wrapper = shallow(<Hello now={moment.toISOString()} />);
        expect(wrapper.contains(<h1>Hello at 2020-05-08T14:00:00.000Z</h1>)).toBe(true);
    });
});