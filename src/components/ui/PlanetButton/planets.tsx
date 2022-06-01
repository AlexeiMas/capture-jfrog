import {
  Restapixray,
  RestapixrayHover,
  Aql,
  AqlHover,
  Automation,
  AutomationHover,
  BuildInfo,
  BuildInfoHover,
  Conan,
  ConanHover,
  IdePlugin,
  IdePluginHover,
  JfrogArtifactory,
  JfrogArtifactoryHover,
  JfrogCli,
  JfrogCliHover,
  JfrogConnect,
  JfrogConnectHover,
  Pipelines,
  PipelinesHover,
  Prysia,
  PrysiaHover,
  Replication,
  ReplicationHover,
} from "../../../helpers/planetsImages";

export interface IPlanetTemplate {
  label: string;
  img: string;
  imgHover: string;
  width: string;
  height: string;
  positionBig: {
    bottom: string | number;
    left: string | number;
  },
  positionMiddle: {
    top: string | number;
    left: string | number;
  },
  positionSmall: {
    top: string | number,
    left: string | number;
  },
  position480: {
    top: string | number,
    left: string | number;
  },
  position430: {
    top: string | number,
    left: string | number;
  },
  positionLittle: {
    top: string | number,
    left: string | number;
  }
}

export const RestApiXrayPlanet: IPlanetTemplate = {
  label: "Rest API Xray",
  img: Restapixray,
  imgHover: RestapixrayHover,
  width: "120px",
  height: "120px",
  positionBig: {
    bottom: '55%',
    left: '1%',
  },
  positionMiddle: {
    top: '2%',
    left: '36%',
  },
  positionSmall: {
    top: '3%',
    left: '31%',
  },
  position480: {
    top: '3%',
    left: '32%',
  },
  position430: {
    top: '2%',
    left: '34%',
  },
  positionLittle: {
    top: '0%',
    left: '46%',
  }
}

export const AqlPlanet: IPlanetTemplate = {
  label: "Aql",
  img: Aql,
  imgHover: AqlHover,
  width: "120px",
  height: "120px",
  positionBig: {
    bottom: '47%',
    left: '0%',
  },
  positionMiddle: {
    top: '3%',
    left: '30%',
  },
  positionSmall: {
    top: '0%',
    left: '40%',
  },
  position480: {
    top: '1%',
    left: '37%',
  },
  position430: {
    top: '1%',
    left: '39%',
  },
  positionLittle: {
    top: '0%',
    left: '41%',
  }
}

export const AutomationPlanet: IPlanetTemplate = {
  label: "Automation",
  img: Automation,
  imgHover: AutomationHover,
  width: "110px",
  height: "110px",
  positionBig: {
    bottom: '55%',
    left: '2%',
  },
  positionMiddle: {
    top: '50%',
    left: '0%',
  },
  positionSmall: {
    top: '6%',
    left: '24%',
  },
  position480: {
    top: '7%',
    left: '23%',
  },
  position430: {
    top: '5%',
    left: '26%',
  },
  positionLittle: {
    top: '2%',
    left: '35%',
  }
}

export const BuildInfoPlanet: IPlanetTemplate = {
  label: "BUILD INFO",
  img: BuildInfo,
  imgHover: BuildInfoHover,
  width: "120px",
  height: "120px",
  positionBig: {
    bottom: '68%',
    left: '6%',
  },
  positionMiddle: {
    top: '3%',
    left: '69%',
  },
  positionSmall: {
    top: '1%',
    left: '63%',
  },
  position480: {
    top: '1%',
    left: '60%',
  },
  position430: {
    top: '1%',
    left: '60%',
  },
  positionLittle: {
    top: '1%',
    left: '60%',
  }
}

export const ConanPlanet: IPlanetTemplate = {
  label: "conan",
  img: Conan,
  imgHover: ConanHover,
  width: "120px",
  height: "120px",
  positionBig: {
    bottom: '45%',
    left: "0%",
  },
  positionMiddle: {
    top: 0,
    left: '50%',
  },
  positionSmall: {
    top: '0%',
    left: '53%',
  },
  position480: {
    top: '0%',
    left: '53%',
  },
  position430: {
    top: '0%',
    left: '53%',
  },
  positionLittle: {
    top: 0,
    left: '53%',
  }
}

export const IdePluginPlanet: IPlanetTemplate = {
  label: "IDE plugin",
  img: IdePlugin,
  imgHover: IdePluginHover,
  width: "120px",
  height: "120px",
  positionBig: {
    bottom: '71%',
    left: '9%',
  },
  positionMiddle: {
    top: '2%',
    left: '33%',
  },
  positionSmall: {
    top: 0,
    left: '45%',
  },
  position480: {
    top: 0,
    left: '45%',
  },
  position430: {
    top: 0,
    left: '45%',
  },
  positionLittle: {
    top: 0,
    left: '45%',
  }
}

export const JfrogArtifactoryPlanet: IPlanetTemplate = {
  label: "jfrog artifactory",
  img: JfrogArtifactory,
  imgHover: JfrogArtifactoryHover,
  width: "110px",
  height: "110px",
  positionBig: {
    bottom: '82%',
    left: '30%',
  },
  positionMiddle: {
    top: '1%',
    left: '60%',
  },
  positionSmall: {
    top: '14%',
    left: '15%',
  },
  position480: {
    top: '13%',
    left: '15%',
  },
  position430: {
    top: '13%',
    left: '15%',
  },
  positionLittle: {
    top: '2%',
    left: '36%',
  }
}

export const JfrogCliPlanet: IPlanetTemplate = {
  label: "jfrog cli",
  img: JfrogCli,
  imgHover: JfrogCliHover,
  width: "110px",
  height: "110px",
  positionBig: {
    left: '26%',
    bottom: '86%',
  },
  positionMiddle: {
    top: '1%',
    left: '66%',
  },
  positionSmall: {
    top: '2%',
    left: '65%',
  },
  position480: {
    top: '1%',
    left: '62%',
  },
  position430: {
    top: '1%',
    left: '62%',
  },
  positionLittle: {
    top: '1%',
    left: '62%',
  }
}

export const JfrogConnectPlanet: IPlanetTemplate = {
  label: "JFrog connect",
  img: JfrogConnect,
  imgHover: JfrogConnectHover,
  width: "110px",
  height: "110px",
  positionBig: {
    bottom: '40%',
    left: 0,
  },
  positionMiddle: {
    top: '26%',
    left: '5%',
  },
  positionSmall: {
    top: '2%',
    left: '33%',
  },
  position480: {
    top: '3%',
    left: '30%',
  },
  position430: {
    top: '2%',
    left: '33%',
  },
  positionLittle: {
    top: '3%',
    left: '29%',
  }
}

export const PipelinesPlanet: IPlanetTemplate = {
  label: "jfrog pipelines",
  img: Pipelines,
  imgHover: PipelinesHover,
  width: "110px",
  height: "110px",
  positionBig: {
    bottom: '67%',
    left: '6%',
  },
  positionMiddle: {
    top: '25%',
    left: '6%',
  },
  positionSmall: {
    top: '1%',
    left: '38%',
  },
  position480: {
    top: '1%',
    left: '38%',
  },
  position430: {
    top: '2%',
    left: '38%',
  },
  positionLittle: {
    top: '1%',
    left: '38%',
  }
}

export const PrysiaPlanet: IPlanetTemplate = {
  label: "Prysia",
  img: Prysia,
  imgHover: PrysiaHover,
  width: "120px",
  height: "120px",
  positionBig: {
    bottom: '67%',
    left: '5%',
  },
  positionMiddle: {
    top: '1%',
    left: '60%',
  },
  positionSmall: {
    top: '0%',
    left: '55%',
  },
  position480: {
    top: '0%',
    left: '55%',
  },
  position430: {
    top: '0%',
    left: '54%',
  },
  positionLittle: {
    top: '0%',
    left: '55%',
  }
}

export const ReplicationPlanet: IPlanetTemplate = {
  label: "Replication",
  img: Replication,
  imgHover: ReplicationHover,
  width: "120px",
  height: "120px",
  positionBig: {
    bottom: '70%',
    left: '10%',
  },
  positionMiddle: {
    top: '1%',
    left: '42%',
  },
  positionSmall: {
    top: 0,
    left: '52%',
  },
  position480: {
    top: 0,
    left: '46%',
  },
  position430: {
    top: 0,
    left: '52%',
  },
  positionLittle: {
    top: 0,
    left: '46%',
  }
}