#!/bin/bash
TAG=$1
AWS_ECR_ACCOUNT_URL=$2
AWS_ECR_HELM_REPO_NAME=$3
echo "oci://$AWS_ECR_ACCOUNT_URL/$AWS_ECR_HELM_REPO_NAME"
export KUBECONFIG=$HOME/.kube/config
result=$(eval helm ls | grep backend-helm)
if [ $? -ne "0" ]; then
   helm install backend-helm "oci://$AWS_ECR_ACCOUNT_URL/$AWS_ECR_HELM_REPO_NAME" --version $TAG
else
   helm upgrade backend-helm "oci://$AWS_ECR_ACCOUNT_URL/$AWS_ECR_HELM_REPO_NAME" --version $TAG
fi