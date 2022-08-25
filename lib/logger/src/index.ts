type logLevel = "INFO" | "ERROR" | "FATAL";

export default class logger {
  private level: logLevel;
  constructor(level?: logLevel) {
    if (level) {
      this.level = level;
      return;
    } else if (process.env.MITO_LOG_LEVEL) {
      this.level = process.env.MITO_LOG_LEVEL as logLevel;
      return;
    } else {
      this.level = "INFO";
    }

    this.log(
      {
        status: "INITIALIZING",
        message: "INITIALIZING LOGGER WITH LEVEL: " + this.level,
      },
      "INFO"
    );
  }

  public log(content: any, minLevel: logLevel) {
    const minLevelNumber = this.logLevelToNumber(minLevel);
    const levelNumber = this.logLevelToNumber(this.level);
    if (minLevelNumber < levelNumber) {
      console.log(content);
    }
  }

  private logLevelToNumber(level: logLevel) {
    if (level === "INFO") {
      return 3;
    }

    if (level === "ERROR") {
      return 2;
    }

    return 1;
  }
}
