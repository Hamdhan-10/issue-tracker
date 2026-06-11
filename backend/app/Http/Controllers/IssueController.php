<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreIssueRequest;
use App\Http\Requests\UpdateIssueRequest;
use App\Services\IssueService;
use Illuminate\Http\JsonResponse;

class IssueController extends Controller
{
    public function __construct(private IssueService $issueService) {}

    public function index(): JsonResponse
    {
        return response()->json($this->issueService->getAllIssues());
    }

    public function store(StoreIssueRequest $request): JsonResponse
    {
        $issue = $this->issueService->createIssue($request->validated());
        return response()->json($issue, 201);
    }

    public function updateStatus(UpdateIssueRequest $request, int $id): JsonResponse
    {
        $issue = $this->issueService->updateStatus($id, $request->validated()['status']);
        return response()->json($issue);
    }
}