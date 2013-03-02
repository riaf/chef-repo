riaf/setup-server
=================

自分用開発環境構築などのあれ


Usage
-----

    knife solo bootstrap [HOST]


Vagrant
-------

recipe のテスト用に vagrant などで

    vagrant up
    knife solo prepare vagrant@192.168.33.10
    knife solo cook vagrant@192.168.33.10

とか。


Requirements
------------

* knife-solo

    gem install knife-solo

### for dev

* vagrant

    gem install vagrant


Setup Environment
-----------------

Use homebrew:

    brew install rbenv ruby-build
    rbenv install ...
    rbenv global ...
    rbenv rehash
    gem install ...
    rbenv rehash


----

Copyright (c) 2013 Keisuke SATO, All rights reserved.

