import Vuex from 'vuex'
import { shallowMount } from '@vue/test-utils'
import Helpers from '../helpers';
import Task from '../../components/Task.vue';


const store = /* Vuex store */

const cmp = shallowMount(TheHeader, {
  global: {
    plugins: [Vuex],

    // OR:
    mocks: {
      $store: store,
    }
  }
})

const localVue = createLocalVue();
localVue.use(Vuex);
const router = Helpers.initRouter(localVue);

const mockMutationEditTask = jest.fn();
const mockMutationDeleteTask = jest.fn();

const store = new Vuex.Store({
  state: {},
  mutations: {
    EditTask: mockMutationEditTask,
    DeleteTask: mockMutationDeleteTask
  },
  actions: {}
});

const createWrapper = (propsData) => {
  return shallowMount(Task, {
    sync: false,
    store,
    router,

    localVue,
    propsData
  });
};
const props = {
  id: 12345,
  text: 'hello',
  completed: false,
  isBeingEdited: false
};

describe('component Task.vue', () => {
  test('success mounting components', (done) => {
    const wrapper = createWrapper();
    expect(wrapper).toBeTruthy();
    done();
  });

  test('should render text received by props', (done) => {
    const wrapper = createWrapper(props);
    const res = wrapper.vm.text;
    expect(res).toEqual(props.text);
    done();
  });

  test('on edit task should trigger mutation in vuex', (done) => {
    const wrapper = createWrapper(props);
    wrapper.vm.editTask({ ...props, completed: true });
    expect(mockMutationEditTask).toHaveBeenCalled();
    done();
  });

  test('on delete task should trigger mutation in vuex', (done) => {
    const wrapper = createWrapper(props);
    wrapper.vm.deleteTask();
    expect(mockMutationDeleteTask).toHaveBeenCalled();
    done();
  });
});
