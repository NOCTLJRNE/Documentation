#!/usr/bin/env python3.6

# import os

# MY_COMMAND1 = "cd ~/komodo/src; ./komodod -daemon"
# os.system("gnome-terminal -e 'bash -c \""+MY_COMMAND1+"; sleep 1000000\" '")
# MY_COMMAND2 = "cd ~/komodo/src; ./komodo-cli getinfo"
# os.system("gnome-terminal -e 'bash -c \""+MY_COMMAND2+"; sleep 1000000\" '")

# i = 1
# while i < 9:
#    filename = "/home/gcharang/gitrepos/portRst2Md/docs/whitepapers/komodo/chapter" + \
#        str(i)+".md"
#    with open(filename, "r") as f:
#        print('["/whitepapers/komodo/chapter'+str(i) +
#              '.md","' + f.readline().strip("# \n")+'"],')
#    i = i+1


# i = 1
# while i < 16:
#    if i < 10:
#        num = "0"+str(i)
#    else:
#        num = str(i)
#    filename = "/home/gcharang/gitrepos/portRst2Md/docs/whitepapers/cc-jl/chapter" + \
#        num+".md"
#
#    with open(filename, "r") as f:
#        print('["/whitepapers/cc-jl/chapter'+num +
#              '.md","' + f.readline().strip("# \n")+'"],')
#    i = i+1

# prevLineStartsWith = ""
#
# with open("test.md", "r") as f, open('out.txt', 'w+') as g:
#     for currLine in f:
#         if currLine[0] == "#":
#             g.write(currLine)
#
#         if currLine[0] == "`" and prevLineStartsWith == "#":
#             text = currLine.strip("`\n")
#             text = "```bash\n" + text + "\n```\n"
#             g.write(text)
#         elif currLine[0] != "\n" and currLine[0] != "#" and prevLineStartsWith != "#":
#             text = "- " + currLine
#             g.write(text)
#
#         if currLine[0] != "\n":
#             prevLineStartsWith = currLine[0]


# from slickrpc import Proxy
# import os
# import re
# import json
# import sys
# import platform
# try:
#    import urlparse
# except:
#    from urllib import parse as urlparse
#
#
# def def_credentials(chain):
#    rpcport = ''
#    operating_system = platform.system()
#    if operating_system == 'Darwin':
#        data_dir = os.path.join(
#            os.environ['HOME'], 'Library', 'Application Support', 'Komodo')
#    elif operating_system == 'Linux':
#        data_dir = os.path.join(os.environ['HOME'], '.komodo')
#    elif operating_system == 'Windows':
#        data_dir = os.path.join(os.environ['APPDATA'], 'komodo')
#    if chain == 'KMD':
#        coin_config_file = os.path.join(data_dir, 'komodo.conf')
#    else:
#        coin_config_file = os.path.join(
#            data_dir, chain, chain + '.conf')
#    with open(coin_config_file, 'r') as f:
#        for line in f:
#            l = line.rstrip()
#            if re.search('rpcuser', l):
#                rpcuser = l.replace('rpcuser=', '')
#            elif re.search('rpcpassword', l):
#                rpcpassword = l.replace('rpcpassword=', '')
#            elif re.search('rpcport', l):
#                rpcport = l.replace('rpcport=', '')
#    if len(rpcport) == 0:
#        if chain == 'KMD':
#            rpcport = 7771
#        else:
#            print("rpcport not in conf file, exiting")
#            print("check " + coin_config_file)
#            exit(1)
#    return Proxy(conf_file=coin_config_file), rpcport, "http://" + rpcuser + ":" + rpcpassword + "@127.0.0.1:" + str(rpcport)
#
#
# komodo, rpcport, service_url = def_credentials("ROGUE")
#
#
# def url_to_conf(service_url):
#    url = urlparse.urlparse(service_url)
#    return dict(rpchost=url.hostname, rpcport=url.port,
#                rpcuser=url.username, rpcpassword=url.password), url
#
#
# print(url_to_conf(service_url))
#
# print(komodo.getblock(komodo.getbestblockhash()))
# toPrint = komodo.cclib(
#    'gameinfo', '17', '["64ba05c131cbd9001481bdc4feb196669e654e3c39b115ae1048feb061ac7e64"]')
# print(toPrint)
#
#
# def myFun(*argv):
#    print(argv)
#
#
# myFun([{'txid': 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
#        'vout': 0}], {'address': 0.01})
