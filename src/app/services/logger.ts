import { Injectable } from '@angular/core';
import { LoggerLevel } from '../models/LoggerLevel';

@Injectable({
  providedIn: 'root'
})
export class Logger {
  loggerLevel = LoggerLevel.INFO;

  log(lvl: LoggerLevel, msg: string): void {
    if (lvl > this.loggerLevel) return;
    switch (lvl) {
      case LoggerLevel.INFO:
        return console.info('%c' + msg, 'color: #6495ED');
      case LoggerLevel.WARN:
        return console.warn('%c' + msg, 'color: #FF8C00');
      case LoggerLevel.ERROR:
        return console.error('%c' + msg, 'color: #DC143C');
      default:
        console.log('debug : ' + msg);
    }
  }
}

