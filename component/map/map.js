const markers = [{
  iconPath: "/assets/images/location.png",
  id: 10,
  latitude: 30.279383,
  longitude: 120.131441,
  width: 30,
  height: 30,
}];

const includePoints = [{
  latitude: 30.279383,
  longitude: 120.141461,
}];

Component({
  mixins: [],
  data: {
    scale: 14,
    longitude: 120.131441,
    latitude: 30.279383,
    markers,
    includePoints,
    circles: [{
      latitude: 30.279383,
      longitude: 120.131441,
      color: '#ff943e',
      fillColor: '#ff943e',
      radius: 80,
    }],
    controls: [{
      id: 5,
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50,
      },
      clickable: true,
    }],

  },
  props: {},
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {},
});
