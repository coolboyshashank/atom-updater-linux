'use babel';

import { CompositeDisposable } from 'atom';
import Updater from './update';

export default class Package {
  activate() {
    this.updater = new Updater();
    this.subscriptions = new CompositeDisposable();

    this.updater.init();
    this.addSubscriptions();
  }

  addSubscriptions() {
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-updater-linux:check': () => this.updater.checkForUpdate(true),
    }));
  }
}
