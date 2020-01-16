#!/bin/bash
nohup sshpass -p 'nutanix/4u' ssh <PC_IP> -l nutanix -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null tail -f /home/docker/nucalm/log/styx.log >out.file &
PID=$!
echo ${PID}